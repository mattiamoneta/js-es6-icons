const boxElements = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];


const domBoxContainer = document.getElementById('box-container');
const domSelect = document.getElementById('icon-filter');
displayIcons('all');


domSelect.addEventListener('change',function(){
    displayIcons(this.value);
});


function displayIcons(filter){

    domBoxContainer.innerHTML = "";
    let filteredBox;

    if (filter != "all"){
        filteredBox = boxElements.filter((e) => {
            if(e.type == filter){
                return true;
            }
        });
    }else{
        filteredBox = boxElements;
    }

    filteredBox.forEach((e, index) => {

		e.color = generateColor();

        domBoxContainer.innerHTML += `<div class="box">
                                            <div class="box-inner">
                                                <div class="content">
                                                    <i class="fa-2x ${e.family} fa-solid fa-${e.name}" style="color: #${e.color};"></i>
                                                    <div class="box-caption">${e.name}</div>
                                                </div>
                                            </div>
                                        </div>`;

    });
}


function generateColor(){
	const random = Math.floor(Math.random() * 16000000);
	const hex = random.toString(16);
	console.log(hex);
	return hex;
}