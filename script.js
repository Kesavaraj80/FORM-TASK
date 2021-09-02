container = document.createElement('div')
container.setAttribute('class', 'container p-4');

heading = document.createElement('div');
heading.setAttribute('class', 'h2');
heading.innerHTML = "HTML-FORM"
heading.style.textAlign = "center";

form = document.createElement('form');
form.setAttribute('class', 'p-5')

fname = createFormElements('First Name', 'text', 'fname');
lname = createFormElements('Last Name ', 'text', 'lname');
address = createFormElements('Address ', 'textarea', 'address');
pincode = createFormElements('Pincode ', 'number', 'pin');
gender = createRadio();
favFood = createMultiSelect();
state = createState();
country = createCountry();
submit = createButton();

// Creating Table//

divtable = document.createElement('div')
divtable.setAttribute('class', 'row');

table = document.createElement('table');
table.setAttribute('class', 'table mt-5');

thead = document.createElement('thead');
tbody = document.createElement('tbody');

tr1 = document.createElement('tr');

th1 = document.createElement('th');
th1.innerHTML = 'First Name';
th2 = document.createElement('th');
th2.innerHTML = 'Last Name';
th3 = document.createElement('th');
th3.innerHTML = 'Address';
th4 = document.createElement('th');
th4.innerHTML = 'Pincode';
th5 = document.createElement('th');
th5.innerHTML = 'Gender';
th6 = document.createElement('th');
th6.innerHTML = 'Favourite Food';
th7 = document.createElement('th');
th7.innerHTML = 'State';
th8 = document.createElement('th');
th8.innerHTML = 'Country';

// Appending All elements //
document.body.append(container);
container.append(heading, form, divtable);
divtable.append(table);
table.append(thead, tbody);
thead.append(tr1);
tr1.append(th1, th2, th3, th4, th5, th6, th7, th8);
form.append(fname, lname, address, pincode, gender, favFood, state, country, submit)

// Functions for Creating Elements//


function createButton() {
    d = document.createElement('div');
    d.setAttribute('class', 'row offset-6');
    btn = document.createElement('button');
    btn.innerHTML = 'Submit';
    btn.type = 'button'
    btn.setAttribute('class', 'btn btn-info text-center mt-5')
    btn.onclick = action;
    d.append(btn);
    return d;
}


function createFormElements(lbltxt, typ, idname) {
    d = document.createElement('div');
    d.setAttribute('class', 'form-group row');
    lbl = document.createElement('label');
    lbl.classList.add('label', 'col-4', 'col-form-label');
    lbl.innerHTML = lbltxt;
     input = document.createElement('input');
    input.setAttribute('type', typ);
    input.id = idname;
    input.placeholder = lbltxt;
    input.setAttribute('class', 'form-control col-6')
    input.required = true;
    d.append(lbl, input);
    return d;
}

function createRadio() {
    fieldset = document.createElement('fieldset');
    fieldset.setAttribute('class', 'form-group');

    d = document.createElement('div');
    d.setAttribute('class', 'row');

     legend = document.createElement('legend');
    legend.setAttribute('class', 'col-form-label col-4')
    legend.innerHTML = 'Gender'

     d1 = document.createElement('div');
    d1.setAttribute('class', 'col-6 pl-1');

     d2 = document.createElement('div');
    d2.setAttribute('class', 'form-check');

    male = document.createElement('label');
    male.setAttribute('for', 'Male');
    male.setAttribute('class', 'form-check-label')
    male.innerHTML = 'Male';
    radio1 = document.createElement('input');
    radio1.setAttribute('type', 'radio');
    radio1.setAttribute('class', 'form-check-input');
    radio1.checked = true;
    radio1.id = 'Male';
    radio1.value = 'Male'
    radio1.name = 'gender';

    d3 = document.createElement('div');
    d3.setAttribute('class', 'form-check');

    female = document.createElement('label');
    female.setAttribute('for', 'Female');
    female.innerHTML = 'Female'
    radio2 = document.createElement('input');
    radio2.setAttribute('class', 'form-check-input');
    radio2.setAttribute('type', 'radio');
    radio2.id = 'Female';
    radio2.value = 'Female'
    radio2.name = 'gender';

    fieldset.append(d)
    d.append(legend, d1);
    d1.append(d2, d3);
    d2.append(radio1, male);
    d3.append(radio2, female);



    return fieldset;
}


function createMultiSelect() {
    d = document.createElement('div');
    d.setAttribute('class', 'form-group row');

    label = document.createElement('label');
    label.setAttribute('class', 'col-form-label col-4');
    label.innerHTML = "Favourite Food"

     select = document.createElement('select');
    select.multiple = true;
    select.id = 'food'
    select.setAttribute('class', 'form-control col-6')
     opt1 = new Option('Pizza', 'Pizza');

     opt2 = new Option('Burger', 'Burger');
     opt3 = new Option('Pasta', 'Pasta');
     opt4 = new Option('Noodles', 'Noodles');
     opt5 = new Option('Biryani', 'Biryani');
    opt2.selected = true;

    select.add(opt1);
    select.add(opt2);
    select.add(opt3);
    select.add(opt4);
    select.add(opt5);

    d.append(label, select);
    return d;
}

function createState() {
     d = document.createElement('div');
    d.setAttribute('class', 'form-group row');

     label = document.createElement('label');
    label.setAttribute('class', 'col-form-label col-4');
    label.innerHTML = "State";

     select = document.createElement('select');
    select.id = 'state'
    select.setAttribute('class', 'form-control col-6')
     opt1 = new Option('Andhra Pradesh', 'Andhra Pradesh');
    opt1.selected = true;
     opt2 = new Option('Karnataka', 'Karnataka');
     opt3 = new Option('Tamilnadu', 'Tamilnadu');
     opt4 = new Option('Kerala', 'Kerala');
     opt5 = new Option('Madhya Pradesh', 'Madhya Pradesh');
     opt6 = new Option('Haryana', 'Haryana');
     opt7 = new Option('Gujarat', 'Gujarath');

    select.add(opt1);
    select.add(opt2);
    select.add(opt3);
    select.add(opt4);
    select.add(opt5);
    select.add(opt6);
    select.add(opt7);

    d.append(label, select);
    return d;
}

function createCountry() {
     d = document.createElement('div');
    d.setAttribute('class', 'form-group row');

     label = document.createElement('label');
    label.setAttribute('class', 'col-form-label col-4');
    label.innerHTML = "Country";

     select = document.createElement('select');
    select.setAttribute('class', 'form-control col-6')
    select.id = 'country'
     opt1 = new Option('India', 'India');
    opt1.selected = true;
     opt2 = new Option('USA', 'USA');
     opt3 = new Option('Australia', 'Australia');
     opt4 = new Option('South Africa', 'South Africa');
     opt5 = new Option('New Zealand', 'New Zealand');
     opt6 = new Option('England', 'England');
     opt7 = new Option('West Indies', 'West Indies');

    select.add(opt1);
    select.add(opt2);
    select.add(opt3);
    select.add(opt4);
    select.add(opt5);
    select.add(opt6);
    select.add(opt7);

    d.append(label, select);
    return d;
}

// Submit Action//

function action() {
     fn = document.getElementById('fname').value;
     ln = document.getElementById('lname').value;
     addr = document.getElementById('address').value;
     pcode = document.getElementById('pin').value;

    if (!fn) {
        alert('Please Enter First Name');
    } else if (!ln) {
        alert('Please Enter Last Name');
    } else if (!addr) {
        alert('Please Enter Address');
    } else if (!pcode) {
        alert('Please Enter pin code');
    } else {

        let tablebody = document.querySelector('tbody');
         trow2 = tablebody.insertRow(0);
         cell1 = trow2.insertCell(0);
         cell2 = trow2.insertCell(1);
         cell3 = trow2.insertCell(2);
         cell4 = trow2.insertCell(3);
         cell5 = trow2.insertCell(4);
         cell6 = trow2.insertCell(5);
         cell7 = trow2.insertCell(6);
         cell8 = trow2.insertCell(7);
        cell1.innerHTML = fn;
        cell2.innerHTML = ln;
        cell3.innerHTML = addr;
        cell4.innerHTML = pcode;

        data = document.getElementsByName('gender');
        for (let i = 0; i < data.length; i++) {
            if (data[i].checked === true)
                cell5.innerHTML = data[i].value;
        }

         foodvalues = document.getElementById('food');
        cell6.innerHTML = [...foodvalues.options].filter((val) => val.selected).map((opt) => opt.value);

        cell7.innerHTML = document.getElementById('state').value;
        cell8.innerHTML = document.getElementById('country').value;

        alert('Form submitted successfully!!')
    }
}