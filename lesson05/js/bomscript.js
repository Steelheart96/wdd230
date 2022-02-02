const usrInput = document.querySelector("input");
const btnInput = document.querySelector(".add");
const listOutput = document.querySelector(".list");

btnInput.addEventListener("click", () => {
	if (usrInput.value != "") {
		let newLi = document.createElement("li");
		let showInput = document.createElement("h1");
		showInput = usrInput.value;

		let exbtn = document.createElement("button");
		exbtn.textContent = "❌";
        	exbtn.ariaLabel = `Remove ${showInput}`

		exbtn.addEventListener("click", () => {listOutput.removeChild(newLi);});

		newLi.append(showInput, exbtn);
		listOutput.appendChild(newLi);

		usrInput.value = "";
	}
});
