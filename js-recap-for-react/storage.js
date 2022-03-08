const userKey = document.getElementById("key");
const userValue = document.getElementById("value");
const setLocalstorage = () => {
	if (userKey && userValue) {
		localStorage.setItem(userKey.value, userValue.value);
	}

	userKey.value = "";
	userValue.value = "";
};
