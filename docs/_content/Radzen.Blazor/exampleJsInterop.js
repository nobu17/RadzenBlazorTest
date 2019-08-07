window.readFileAsBase64 = (fileInput) => {
    const readAsDataURL = (fileInput) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onerror = () => {
                reader.abort();
                reject(new Error("Error reading file."));
            };
            reader.addEventListener("load", () => {
                resolve(reader.result);
            }, false);
            reader.readAsDataURL(fileInput.files[0]);
        });
    };

    return readAsDataURL(fileInput);
};

window.getPopupWidthAndTop = (popup) => {
    var rect = popup.parentNode.getBoundingClientRect();
    return `width:calc(${rect.width + 'px'} - 1.325rem); top:${rect.top + rect.height - 3 + 'px'}`;
};