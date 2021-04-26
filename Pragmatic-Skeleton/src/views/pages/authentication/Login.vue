<template>
	<vue-scroll class="login-page align-vertical">
		<div class="form-wrapper align-vertical-middle">
			<div class="form-box card-base card-shadow--extraLarge">
				<img class="image-logo" src="@/assets/images/logo.gif" alt="logo"/>
				<div class="flex justify-center align-center">
					ระบบติดตามระยะไกลระบบสูบน้ำ
				</div>
				<float-label class="styled">
					<input v-model ="form.email" type="email" placeholder="อีเมล์">
				</float-label>
				<float-label class="styled">
					<input v-model ="form.password" type="password" placeholder="รหัสผ่าน">
				</float-label>
				
				<div class="flex">
					<div class="box grow"><el-checkbox>จดจำฉันในครั้งต่อไป </el-checkbox></div>
					<div class="box grow text-right"><router-link to="/dashboard">ลืมรหัสผ่าน?</router-link></div>
				</div>

				<div class="flex text-center center pt-30 pb-10">			
					<el-button plain size="small" @click="login" class="login-btn tada animated">
						เข้าสู่ระบบ
					</el-button>
				</div>
			</div>
		</div>
	</vue-scroll>
</template>

<script>
import firebase from 'firebase'

export default {
	name: 'Login',
	data() {
		return {
			form: {
				email: '',
				password: '',
			}
		}
	},
	methods: {
		login() {
			firebase
			.auth()
			.signInWithEmailAndPassword(this.form.email,this.form.password)
			.then((user)=>{
				let firebaseUser = firebase.auth().currentUser.providerData[0]
				this.$store.commit('setLogin')
				this.$router.push('dashboard')
				this.$store.commit('setUser',firebaseUser.uid)
				
			}).catch((err)=>{
				alert(err.message)
			})
			
		}
	}
}
</script>

<style lang="scss">
@import '../../../assets/scss/_variables';

.login-page {
	background: $text-color;
	margin-left: -30px;
	margin-right: -30px;

	.form-wrapper {
		width: 100%;
	}
	
	.form-box {
		width: 100%;
		max-width: 340px;
		padding: 30px;
		box-sizing: border-box;
		margin: 20px auto;

		a {
			font-size: 14px;
			color: $text-color-accent;
			text-decoration: none;
			font-weight: 500;
		}

		.image-logo {
			width: 80px;
			margin: 0px auto;
			margin-bottom: 30px;
			display: block;
		}

		.login-btn ,
		.social-btn {
			width: 160px;

			&.google {
				margin-bottom: 10px;
				background-color: #d73d32;
				color: white;

				&:hover {
					border-color: #d73d32;
				}
			}
			&.facebook {
				background-color: #3f5c9a;
				color: white;

				&:hover {
					border-color: #3f5c9a;
				}
			}
		}

		.signin-box {
			font-size: 14px;
		}
	}
}

@media (max-width: 768px) {
	.layout-container .container .view.login-page {
		margin-left: -5px;
		margin-right: -5px;
		max-width: calc(100% + 10px);
	}
}
</style>
