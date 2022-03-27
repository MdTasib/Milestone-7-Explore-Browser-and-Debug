let db = {};

const addToDb = item => {
	// db[item] = 1;
	const storedTracker = localStorage.getItem("db-local");
	if (storedTracker) {
		db = JSON.parse(storedTracker);
	}

	if (item in db) {
		db[item] = db[item] + 1;
	} else {
		db[item] = 1;
	}

	localStorage.setItem("db-local", JSON.stringify(db));
};

const removeItem = item => {
	const storedTracker = localStorage.getItem("db-local");
	if (storedTracker) {
		const storedObject = JSON.parse(storedTracker);
		delete storedObject[item];
		localStorage.setItem("db-local", JSON.stringify(storedObject));
	}
};
