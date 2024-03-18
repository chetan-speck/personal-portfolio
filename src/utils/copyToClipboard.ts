// -------------------------------------------------------------------------------------------

const copyToClipboard = (text: string): Promise<boolean> => {
	return new Promise((resolve, reject) => {
		navigator.clipboard
			.writeText(text)
			.then(() => {
				resolve(true);
			})
			.catch((error) => {
				reject(error);
			});
	});
};

// -------------------------------------------------------------------------------------------

export default copyToClipboard;

// -------------------------------------------------------------------------------------------
