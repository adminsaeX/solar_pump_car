<template>
	<vue-scroll class="register-page align-vertical">
		<div class="form-wrapper align-vertical-middle">
			<div class="form-box card-base card-shadow--extraLarge">
				<img class="image-logo" src="@/assets/images/logo.gif" alt="logo"/>
				
				<float-label class="styled">
					<input v-model ="form.email" type="email" placeholder="อีเมล์">
				</float-label>
				<float-label class="styled">
					<input v-model="form.password" type="password" placeholder="รหัสผ่าน">
				</float-label>
				<float-label class="styled">
					<input v-model="form.re_password" type="password" placeholder="ยืนยันรหัสผ่าน">
				</float-label>
				
				<div class="flex">
					<div class="box grow"><el-checkbox>ฉันยอมรับเงื่อนไข</el-checkbox></div>
				</div>

				<div class="flex text-center center pt-30 pb-20">			
					<el-button plain size="small" @click="login" class="signin-btn tada animated">
						เข้าสู่ระบบ
					</el-button>
				</div>

				<div class="text-center login-box pt-10">
					มีบัญชีใช้งานแล้ว <a @click="loginPage()">เข้าสู่ระบบ</a>
				</div>
			</div>
		</div>
	</vue-scroll>
</template>

<script>
import firebase from 'firebase'
export default {
	name: 'Register',
	data() {
		return {
			form: {
				email: '',
				password: '',
				re_password:''
			}
		}
	},
	methods: {
		login() {
			if(this.form.password === this.form.re_password){
			firebase
			.auth()
			.createUserWithEmailAndPassword(this.form.email, this.form.password).then((user) => {
				this.$router.push('login')
				// eslint-disable-next-line handle-callback-err
			}).catch((err) => {
				this.$alert(err.message,"การุณาตรวจสอบการป้อนข้อมูล","warning")
			})
			}else{
				this.$alert("รหัสผ่านไม่ตรงกัน","การุณาตรวจสอบการป้อนข้อมูล","warning")
			}
		},
		loginPage(){
			this.$router.push('login')
		}
	}
}
</script>

<style lang="scss">
@import '../../../assets/scss/_variables';

.register-page {
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
			margin-bottom: 50px;
			display: block;
		}

		.signin-btn {
			width: 160px;
		}

		.login-box {
			font-size: 14px;
		}
	}
}

@media (max-width: 768px) {
	.layout-container .container .view.register-page {
		margin-left: -5px;
		margin-right: -5px;
		max-width: calc(100% + 10px);
	}
}
</style>
