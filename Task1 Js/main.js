
var proContainer = [];
var proName = document.getElementById("proName");
var proPrice = document.getElementById("proPrice");
var proCategory = document.getElementById("proCategory");
var proDesc = document.getElementById("proDesc");
var btn = document.getElementById("btn");
var proSearch = document.getElementById("proSearch");

var updateIndex = -1;


if (JSON.parse(localStorage.getItem("AllProducts")) != null) {
  proContainer = JSON.parse(localStorage.getItem("AllProducts"));
  displayPro();
}


btn.onclick = function () {
  var pro = {
    name: proName.value,
    price: proPrice.value,
    category: proCategory.value,
    desc: proDesc.value,
  };

  if (updateIndex === -1) {
    // Add mode
    proContainer.push(pro);
  } else {
    // Update mode
    proContainer[updateIndex] = pro;
    updateIndex = -1;
    btn.innerText = "Add Product";
  }

  localStorage.setItem("AllProducts", JSON.stringify(proContainer));
  displayPro();
  clearForm();
};


function delPro(index) {
  proContainer.splice(index, 1);
  localStorage.setItem("AllProducts", JSON.stringify(proContainer));
  displayPro();
}


function updatePro(index) {
  proName.value = proContainer[index].name;
  proPrice.value = proContainer[index].price;
  proCategory.value = proContainer[index].category;
  proDesc.value = proContainer[index].desc;

  updateIndex = index;
  btn.innerText = "Update Product";
}


function displayPro() {
  var AllPro = ``;
  for (let i = 0; i < proContainer.length; i++) {
    AllPro += `
        <tr>
            <td>${i + 1}</td>
            <td>${proContainer[i].name}</td>
            <td>${proContainer[i].price}</td>
            <td>${proContainer[i].category}</td>
            <td>${proContainer[i].desc}</td>
            <td>
                <button class="btn delete" onclick="delPro(${i})">Delete</button>
                <button class="btn update" onclick="updatePro(${i})">Update</button>
            </td>
        </tr>
        `;
  }

  document.getElementById("tbody").innerHTML = AllPro;
}


proSearch.onkeyup = function () {
  var term = proSearch.value.toLowerCase();
  var AllPro = ``;
  for (let i = 0; i < proContainer.length; i++) {
    if (proContainer[i].name.toLowerCase().includes(term)) {
      AllPro += `
            <tr>
                <td>${i + 1}</td>
                <td>${proContainer[i].name}</td>
                <td>${proContainer[i].price}</td>
                <td>${proContainer[i].category}</td>
                <td>${proContainer[i].desc}</td>
                <td>
                    <button class="btn delete" onclick="delPro(${i})">Delete</button>
                    <button class="btn update" onclick="updatePro(${i})">Update</button>
                </td>
            </tr>
            `;
    }
  }
  document.getElementById("tbody").innerHTML = AllPro;
};



