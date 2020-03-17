const data = [
    { name: 'user1', group: 1 },
    { name: 'user2', group: 1 },
    { name: 'user3', group: 2 }
];


data.forEach((element, i) => {
    const div = document.createElement('div');
    document.body.appendChild(div).classList.add('user', 'group');
    div.setAttribute('id', data[i].group)
    div.style.width = "100px";
    div.style.height = "50px";
    div.style.border = "1px solid #808080";
    div.innerHTML = data[i].name;
    i++;
});

document.querySelectorAll('.user').forEach(item => {
    item.addEventListener('mouseover', e => {
        item.style.border = "2px solid black";
    })
    item.addEventListener('mouseout', e => {
        item.style.border = "1px solid #808080";
    })

});

document.querySelectorAll('.group').forEach(box => {
    box.addEventListener('click', e => {
        alert(`User group is: ${box.id}`);
    })
})
