import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './index.css';

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
  {
    name: 'Norita Chandler',
    position: 'Sales Assistant',
    office: 'San Francisco',
    age: 32,
    startDate: '2013/06/01',
    salary: 125000,
  },
];

var countElements = tableInfo.length;
var countElementsOnPage = 5;
var countPage = countElements / countElementsOnPage;
if (countPage ^ !0) {
  countPage = Math.floor(countPage) + 1;
}
var activePage = 1;
var i = 0;

function drawModuleTable() {
  var body = document.querySelector('body');
  body.innerHTML = `<div class="${styles.tableModules}">\
                      <div class="container">\
                          <div class="row">
                            <div class="${styles.searchForm}">
                              <form class="navbar-form navbar-right" role="search">\
                                <span>Search:</span>\
                                <div class="form-group">\
                                    <input type="text" class="form-control">\
                                  </div>\
                                <button type="submit" class="btn btn-default">Search</button>\
                              </form>
                            </div>\
                              <table class="${
                                styles.table
                              } table" id="table_list">\
                                <thead>\
                                    <tr>\
                                        <th data-type="name" class="${
                                          styles.sorting
                                        }">\
                                          <div class="${styles.flex}">\
                                              <span>Name</span>\
                                              <div class="${styles.icon}">\
                                                  <i class="glyphicon glyphicon-triangle-top"></i>\
                                                  <i class="glyphicon glyphicon-triangle-bottom"></i>\
                                              </div>\
                                          </div>\
                                        </th>\
                                        <th data-type="position" class="${
                                          styles.sorting
                                        }">\
                                          <div class="${styles.flex}">\
                                              <span>Position</span>\
                                              <div class="${styles.icon}">\
                                                  <i class="glyphicon glyphicon-triangle-top"></i>\
                                                  <i class="glyphicon glyphicon-triangle-bottom"></i>\
                                              </div>\
                                          </div>\
                                        </th>\
                                        <th data-type="office" class="${
                                          styles.sorting
                                        }">\
                                          <div class="${styles.flex}">\
                                              <span>Office</span>\
                                              <div class="${styles.icon}">\
                                                  <i class="glyphicon glyphicon-triangle-top"></i>\
                                                  <i class="glyphicon glyphicon-triangle-bottom"></i>\
                                              </div>\
                                          </div>\
                                        </th>\
                                        <th data-type="age" class="${
                                          styles.sorting
                                        }">\
                                          <div class="${styles.flex}">\
                                              <span>Age</span>\
                                              <div class="${styles.icon}">\
                                                  <i class="glyphicon glyphicon-triangle-top"></i>\
                                                  <i class="glyphicon glyphicon-triangle-bottom"></i>\
                                              </div>\
                                          </div>\
                                        </th>\
                                        <th data-type="startDate" class="${
                                          styles.sorting
                                        }">\
                                          <div class="${styles.flex}">\
                                              <span>Start Date</span>\
                                              <div class="${styles.icon}">\
                                                  <i class="glyphicon glyphicon-triangle-top"></i>\
                                                  <i class="glyphicon glyphicon-triangle-bottom"></i>\
                                              </div>\
                                          </div>\
                                        </th>\
                                        <th data-type="salary" class="${
                                          styles.sorting
                                        }">\
                                          <div class="${styles.flex}">\
                                              <span>Salary</span>\
                                              <div class="${styles.icon}">\
                                                  <i class="glyphicon glyphicon-triangle-top"></i>\
                                                  <i class="glyphicon glyphicon-triangle-bottom"></i>\
                                              </div>\
                                          </div>\
                                        </th>\
                                    </tr>\
                                </thead>\
                                <tbody id="tbody">\
                                </tbody>\
                              </table>\
                            <div class="${styles.paginationList}">
                              <nav class="navbar-right">\
                                <ul class="pagination" id="pagination">\
                                  <li class="page-item">\
                                      <a class="page-link">Previous</a>\
                                  </li>\
                                  <li class="page-item">\
                                      <a class="page-link">Next</a>\
                                  </li>\
                                </ul>\
                              </nav>
                            </div>
                          </div>\
                      </div>\
                    </div>`;
  drawTable();
  pageFunction();
  sortFunction();
}

function drawTable() {
  var elTbody = document.getElementById('tbody');
  elTbody.innerHTML = '';
  for (
    i = (activePage - 1) * countElementsOnPage;
    i < countElementsOnPage * activePage && i < tableInfo.length;
    i++
  ) {
    var table = document.querySelector('tbody').insertRow();
    var tdName = table.insertCell(0);
    var tdPosition = table.insertCell(1);
    var tdOffice = table.insertCell(2);
    var tdAge = table.insertCell(3);
    var tdStartDate = table.insertCell(4);
    var tdSalary = table.insertCell(5);
    tdName.setAttribute('class', `${styles.tdName}`);
    tdPosition.setAttribute('class', `${styles.tdPosition}`);
    tdOffice.setAttribute('class', `${styles.tdOffice}`);
    tdAge.setAttribute('class', `${styles.tdAge}`);
    tdStartDate.setAttribute('class', `${styles.tdStartDate}`);
    tdSalary.setAttribute('class', `${styles.tdSalary}`);
    tdName.innerHTML = tableInfo[i].name;
    tdPosition.innerHTML = tableInfo[i].position;
    tdOffice.innerHTML = tableInfo[i].office;
    tdAge.innerHTML = tableInfo[i].age;
    tdStartDate.innerHTML = tableInfo[i].startDate;
    tdSalary.innerHTML = '$' + tableInfo[i].salary;
  }
}

function pageFunction() {
  var tableList = document.querySelector('table');
  tableList.setAttribute('data-page', activePage);
  for (var j = 1; j <= countPage; j++) {
    var newLi = document.createElement('li');
    newLi.setAttribute('class', 'page-item');
    newLi.innerHTML = `<a class="page-link">` + (countPage - j + 1) + '</a>';
    var pagination = document.getElementById('pagination');
    pagination.insertBefore(newLi, pagination.children[1]);
  }

  var clickPageLink = document.getElementsByClassName('page-item');
  var arrLi = Array.prototype.slice.call(clickPageLink, 0);
  arrLi.forEach(pageLink => {
    pageLink.addEventListener('click', () => {
      var allList = document.querySelectorAll('.page-item');
      for (var x = 0; x < allList.length; x++) {
        allList[x].classList.remove('active');
      }
      pageLink.classList.add('active');
      var curentPage = Number(tableList.getAttribute('data-page'));
      activePage = Number(pageLink.innerText);
      if (pageLink.innerText === 'Previous') {
        activePage = curentPage - 1;
        if (activePage === 0) {
          activePage = 1;
        }
      }
      if (pageLink.innerText === 'Next') {
        activePage = curentPage + 1;
        if (activePage > countPage) {
          activePage = countPage;
        }
      }
      i = countElementsOnPage;
      tableList.setAttribute('data-page', activePage);
      drawTable();
    });
  });
}

function sortFunction() {
  var arrTh = document.querySelectorAll('th');

  arrTh.forEach(colHead => {
    colHead.addEventListener('click', () => {
      var selectAttr = colHead.getAttribute('data-type');
      if (colHead.classList.contains('active')) {
        tableInfo.sort((a, b) => {
          if (a[selectAttr] < b[selectAttr]) {
            return 1;
          }
          if (a[selectAttr] > b[selectAttr]) {
            return -1;
          }
          return 0;
        });
        colHead.classList.remove('active');
      } else {
        colHead.classList.add('active');
        tableInfo.sort((a, b) => {
          if (a[selectAttr] > b[selectAttr]) {
            return 1;
          }
          if (a[selectAttr] < b[selectAttr]) {
            return -1;
          }
          return 0;
        });
      }
      var selectTh = document.querySelectorAll('thead .active');
      selectTh.forEach(item => {
        var classArr = item.getAttribute('class').split(' ');
        for (var z = 0; z < classArr.length; z++) {
          if (classArr[z] == 'active' && colHead !== item) {
            classArr.splice(z, 1);
          }
        }
        item.className = classArr.join(' ');
      });
      activePage = 1;
      return drawTable(activePage);
    });
  });
}

document.addEventListener('DOMContentLoaded', drawModuleTable);
