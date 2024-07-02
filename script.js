function charcountupdate2(str) {
	const lng = str.length;
	document.getElementById('charcount2').innerHTML = `${lng}`;
	const expsub = document.querySelector('.experience-subject .caracter-count');
	const expval = document.getElementById('experience-subject');
    if(expval.value.length <= 90 && expval.value.length >= 20){
		expsub.classList.add('turq');
		expsub.classList.remove('rojo');
    }
    else if(expval.value.length > 0 && expval.value.length < 20){
		expsub.classList.remove('turq');
		expsub.classList.add('rojo');
    } else {
		expsub.classList.remove('turq');
		expsub.classList.remove('rojo');
	}
}

function charcountupdate3(str) {
	const lng = str.length;
	document.getElementById('charcount3').innerHTML = `${lng}`;
	const msgexptxt = document.querySelector('.experience-text .caracter-count');
	const expval = document.getElementById('msg-experience');
    if(expval.value.length <= 18000 && expval.value.length >= 300){
		msgexptxt.classList.add('turq');
		msgexptxt.classList.remove('rojo');
    }
    else if (expval.value.length > 0 && expval.value.length < 300){
		msgexptxt.classList.remove('turq');
		msgexptxt.classList.add('rojo');
	} else {
		msgexptxt.classList.remove('turq');
		msgexptxt.classList.remove('rojo');
	}
}

const msgreq = document.getElementById('msg-experience');
const subreq = document.getElementById('experience-subject');
msgreq.required = false;
subreq.required = false;
const siVal = document.getElementById('yep');
const noVal = document.getElementById('nope');
const valcont = document.querySelector('.desplegable');
siVal.onclick = () => {
	if(siVal.checked){
		msgreq.required = true;
		subreq.required = true;
		valcont.classList.add('slidedown');
		valcont.classList.remove('slideup');
	}
}
noVal.onclick = () => {
	if(noVal.checked){
		msgreq.required = false;
		subreq.required = false;
		valcont.classList.add('slideup');
		valcont.classList.remove('slidedown');
	}
}


/*Consulta API*/
const headers = new Headers();
headers.append('Content-Type', 'text/plain');

const request = new Request('http://127.0.0.1:3000/', {
	headers: headers
});

	
for (const k of request.headers.keys()) {
    console.log('request.headers.get("' + k + '") =', request.headers.get(k));
}
fetch(request)
    .then(function(response) {
        for (const k of response.headers.keys()) {
            console.log('response.headers.get("' + k + '") =', response.headers.get(k));
        }
        return response.json();
    })
    .then(function(data) {
		const newArr = data && data.filter(el => {
			return(el.comments > 20);
		});
		console.log(newArr);

		newArr.forEach(function(entry) {
			var newElement = document.createElement('div');
			newElement.classList.add('plus-container');
			newElement.innerHTML = `<div class="row"><img src="${entry.owner.picture}"><div class="text-content"><div class="plus-text">${entry.text}</div><div class="plus-name">${entry.owner.firstName} ${entry.owner.lastName}</div></div></div><div class="row"><div class="plus-likes">${entry.comments} comentarios</div><div class="plus-more">leer más ></div></div>`;
			document.getElementById('plus-exp').appendChild(newElement);
		});
		
    })
    .catch(function(err) {
        console.log(err);
    });