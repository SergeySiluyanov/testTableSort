import 'bootstrap/dist/css/bootstrap.min.css';

var tableInfo = [
  {
    name: 'Thor Walton',
    position: 'Developer',
    office: 'New York',
    age: 61,
    startDate: '2013/08/11',
    salary: 98540,
  },
  {
    name: 'Quinn Flynn',
    position: 'Support Lead',
    office: 'Edinburgh',
    age: 22,
    startDate: '2013/03/03',
    salary: 342000,
  },
  {
    name: 'Jennifer Acosta',
    position: 'Junior Javascript Developer',
    office: 'Edinburgh',
    age: 43,
    startDate: '2013/02/01',
    salary: 75650,
  },
  {
    name: 'Haley Kennedy',
    position: 'Senior Marketing Designer',
    office: 'London',
    age: 43,
    startDate: '2012/12/18',
    salary: 313500,
  },
  {
    name: 'Brielle Williamson',
    position: 'Integration Specialist',
    office: 'New York',
    age: 61,
    startDate: '2012/12/02',
    salary: 372000,
  },
  {
    name: 'Michael Silva',
    position: 'Marketing Designer',
    office: 'London',
    age: 66,
    startDate: '2012/11/27',
    salary: 198500,
  },
  {
    name: 'Bradley Greer',
    position: 'Software Engineer',
    office: 'London',
    age: 41,
    startDate: '2012/10/13',
    salary: 132000,
  },
  {
    name: 'Dai Rios',
    position: 'Personnel Lead',
    office: 'Edinburgh',
    age: 35,
    startDate: '2012/09/26',
    salary: 217500,
  },
  {
    name: 'Herrod Chandler',
    position: 'Sales Assistant',
    office: 'San Francisco',
    age: 59,
    startDate: '2012/08/06',
    salary: 137500,
  },
  {
    name: 'Zorita Serrano',
    position: 'SoftwareEngineer',
    office: 'San Francisco',
    age: 56,
    startDate: '2012/06/01',
    salary: 115000,
  },
];

var i;

function drawTable() {
  var elTbody = document.getElementById('tbody');
  elTbody.innerHTML = '';
  for (i = 0; i < tableInfo.length; i++) {
    var table = document.getElementsByTagName('tbody')[0].insertRow(0);
    var tdName = table.insertCell(0);
    var tdPosition = table.insertCell(1);
    var tdOffice = table.insertCell(2);
    var tdAge = table.insertCell(3);
    var tdStartDate = table.insertCell(4);
    var tdSalary = table.insertCell(5);
    tdName.setAttribute('class', 'tdName');
    tdPosition.setAttribute('class', 'tdPosition');
    tdOffice.setAttribute('class', 'tdOffice');
    tdAge.setAttribute('class', 'tdAge');
    tdStartDate.setAttribute('class', 'tdStartDate');
    tdSalary.setAttribute('class', 'tdSalary');
    tdName.innerHTML = tableInfo[i].name;
    tdPosition.innerHTML = tableInfo[i].position;
    tdOffice.innerHTML = tableInfo[i].office;
    tdAge.innerHTML = tableInfo[i].age;
    tdStartDate.innerHTML = tableInfo[i].startDate;
    tdSalary.innerHTML = '$' + tableInfo[i].salary;
  }
}

var objTh = document.getElementsByTagName('th');
var arrTh = Array.prototype.slice.call(objTh, 0);

arrTh.forEach(colHead => {
  colHead.addEventListener('click', () => {
    var selectTh = document.querySelectorAll('thead .active');
    selectTh.forEach(item => {
      var classArr = item.getAttribute('class').split(' ');
      for (var i = 0; i < classArr.length; i++) {
        if (classArr[i] == 'active') {
          classArr.splice(i, 1);
          i--;
        }
      }
      item.className = classArr.join(' ');
    });
    var selectAttr = colHead.getAttribute('data-type');
    if (colHead.classList.contains('active')) {
      tableInfo.sort(function(a, b) {
        if (a[selectAttr] > b[selectAttr]) {
          return 1;
        }
        if (a[selectAttr] < b[selectAttr]) {
          return -1;
        }
        return 0;
      });
      colHead.classList.remove('active');
    } else {
      colHead.classList.add('active');
      tableInfo.sort(function(a, b) {
        if (a[selectAttr] < b[selectAttr]) {
          return 1;
        }
        if (a[selectAttr] > b[selectAttr]) {
          return -1;
        }
        return 0;
      });
    }
    return drawTable();
  });
});

drawTable();
