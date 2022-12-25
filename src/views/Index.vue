<template>
	<div>
		<div class="login" v-if="state.username === '' || state.username === null">
			<form class="login__form" @submit.prevent="Login">
				<h1 class="login__title">Авторизация</h1>
				<input class="login__input" type="text" v-model="inputUserName" placeholder="Юзернейм" />
				<input class="button" type="submit" value="Войти" />
			</form>
		</div>

		<div class="chat" v-else>
			<header class="chat__header">
				<button class="kill button" @click="UsersDiePlz">
					UsersDiePlz()
					<div class="tooltip">Полностью сотрёт весь чат из базы и разлогинит пользователя</div>
				</button>
				<h1 class="chat__title">Привет, {{ state.username }}!</h1>
				<button class="logout button" @click="Logout">Logout</button>
			</header>
			<div class="page__container">
				<div class="chat__wrapper">
					<ul class="chat__messages" v-if="state.messages.length > 0">
						<li v-for="message in state.messages" :key="message.key" :class="message.username == state.username ? 'chat__message current-user' : 'chat__message'">
							<div class="message__inner">
								<div class="username">{{ message.username }}</div>
								<div class="time">{{ message.time }}</div>
								<div class="content">{{ message.content }}</div>
							</div>
						</li>
					</ul>
					<p v-else>Cообщений пока нет</p>

					<form class="chat__footer" @submit.prevent="SendMessage">
						<input class="chat__textarea" v-model="inputMessage" />
						<input class="button" type="submit" value="Отправить" />
					</form>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { reactive, onMounted, ref } from "vue";
import db from "@/db.js";

export default {
	setup() {
		const inputUserName = ref("");
		const inputMessage = ref("");

		const state = reactive({
			username: "",
			messages: [],
		});

		const Login = () => {
			if (inputUserName.value != "" || inputUserName.value != null) {
				state.username = inputUserName.value;
				inputUserName.value = "";
			}
		};

		const Logout = () => {
			state.username = "";
		};

		const UsersDiePlz = () => {
			const messageRef = db.database().ref("messages");
			messageRef.remove();
			window.location.reload();
		};

		const SendMessage = () => {
			const messageRef = db.database().ref("messages");
			if (inputMessage.value === "" || inputMessage.value === null) {
				return;
			}

			let date = new Date();

			const message = {
				username: state.username,
				content: inputMessage.value,
				time: date.toLocaleString().replace(",", ""),
			};

			messageRef.push(message);
			inputMessage.value = "";
		};

		onMounted(() => {
			const messageRef = db.database().ref("messages");
			messageRef.on("value", snapshot => {
				const data = snapshot.val();
				let messages = [];

				Object.keys(data).forEach(key => {
					messages.push({
						id: key,
						username: data[key].username,
						content: data[key].content,
						time: data[key].time,
					});
				});
				state.messages = messages;
			});
		});

		return { inputUserName, Login, Logout, state, SendMessage, inputMessage, UsersDiePlz };
	},
};
</script>

<style lang="scss" scoped>
.login {
	display: flex;
	justify-content: center;
	align-items: center;
	min-height: 100vh;
}

.login__form {
	background-color: $white;
	padding: 40px;
	border-radius: 8px;
	display: flex;
	flex-direction: column;

	& label {
		margin-bottom: 5px;
		padding-left: 5px;
		@include font(1.4rem, 1.6rem, 400);
		color: $dark;
	}
}

.login__input {
	margin-bottom: 15px;
	padding: 8px 15px;
	border-radius: 8px;
	outline: none;
	border: 2px solid $border;
	transition: $tr;

	&:focus {
		background-color: $focus;
	}
	&::placeholder {
		@include font(1.4rem, 1.6rem, 400);
		color: $light;
	}
}

.login__title {
	margin: 0 auto 20px;
	@include font(2.6rem, 3rem, 700);
	color: $dark;
}

.chat {
	display: flex;
	flex-direction: column;
}

.chat__header {
	display: flex;
	justify-content: space-between;
	align-items: center;
	color: $white;
	background-color: darken($dark, 10%);
	padding: 20px;
	width: 100%;
	margin-bottom: 40px;

	@media (max-width: $mobile) {
		flex-direction: column;
		gap: 20px;
	}
}

.chat__title {
	@include font(2.2rem, 2.6rem, 700);
	margin: 0;
}

.logout {
	position: relative;

	&::before {
		position: absolute;
		content: "";
		left: -20px;
		top: 50%;
		transform: translateY(-50%);
		width: 10px;
		height: 10px;
		border-radius: 50%;
		border: 1px solid $black;
		background-color: rgb(44, 216, 44);
		box-shadow: 0 0 5px rgb(44, 216, 44);
	}
}

.page__container {
	padding: 0 40px 40px;

	@media (max-width: $mobile) {
		padding: 0 20px 20px;
	}
}

.chat__wrapper {
	background-color: $white;
	border: 2px solid $medium;
	color: $light;
	padding: 20px;
	margin: 0 auto;
	border-radius: 8px;
	max-width: 1000px;
	width: 100%;
	max-height: calc(100vh - 150px);
	display: flex;
	flex-direction: column;

	@media (max-width: $mobile) {
		max-height: 400px;
	}
}

p {
	margin: 0;
	min-height: 100px;
	text-align: center;
	display: flex;
	justify-content: center;
	align-items: center;
}
.chat__messages {
	border: 1px solid $border;
	padding: 30px;
	margin-bottom: 20px;
	list-style: none;
	margin: 0 0 20px;
	padding: 20px;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 20px;
	flex-shrink: 1;
	max-height: calc(100vh - 150px);
	overflow: auto;

	&::-webkit-scrollbar {
		width: 3px;
	}

	&::-webkit-scrollbar-track {
		background: $border;
	}

	&::-webkit-scrollbar-thumb {
		background: $medium;
	}
}

.chat__message {
	&.current-user {
		align-self: flex-end;
	}
}

.username {
	color: $medium;
	@include font(1.6rem, 1.6rem, 700);
	margin-bottom: 5px;
	.current-user & {
		color: $light;
	}
}

.content {
	background-color: $focus;
	padding: 10px;
	border-radius: 4px;

	.current-user & {
		background-color: lighten($medium, 10%);
		color: $white;
	}
}

.time {
	@include font(1.1rem, 1.6rem, 400);
	color: $light;
	margin-bottom: 5px;
}

.chat__footer {
	display: flex;
	align-items: center;
	gap: 20px;

	@media (max-width: $mobile) {
		flex-direction: column;
	}
}

.chat__textarea {
	flex-grow: 1;
	padding: 10px;
	outline: none;
	border: 2px solid $border;
	transition: $tr;

	&:focus {
		background-color: $focus;
	}
	&::placeholder {
		@include font(1.4rem, 1.6rem, 400);
		color: $light;
	}

	@media (max-width: $mobile) {
		width: 100%;
	}
}

.kill {
	background-color: rgb(201, 19, 155);
	position: relative;
	&:hover {
		background-color: lighten(rgb(201, 19, 155), 10%);
		.tooltip {
			transform: translateY(0);
		}
	}
}

.tooltip {
	position: absolute;
	right: -150%;
	top: 0;
	transform: translateY(-300px);
	background-color: $white;
	color: $dark;
	@include font(1rem, 1.4rem, 400);
	padding: 10px;
	border-radius: 8px;
	text-align: left;
	width: 180px;
	transition: 0.5s ease-in-out;

	&::after {
		position: absolute;
		content: "";
		top: 10px;
		left: -10px;
		width: 10px;
		height: 10px;
		background-color: $white;
		transform: rotate(45deg) translateX(7px);
	}

	@media (max-width: $mobile) {
		display: none;
	}
}
</style>
