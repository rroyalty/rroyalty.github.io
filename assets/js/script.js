// $(document).ready(function() {

//     projectList.projects.forEach((element, index, array) => {
//         let arrLength = array.length;
//         rowChildren(element.name, element.icon, index, arrLength);
//     });

//     populateProject(projectList.projects[0]);

//     function populateProject(element) {
//         $('#projectDetails').empty();
//         const {description, domain, github, _, imgSrc, name} = element;

//         const projectDetails = `<div class="content">
//                                     <h1 class="indian-khaki-font center-text">${name}</h1>
//                                 </div>
//                                 <div class="card-content columns">
//                                     <div class="column">
//                                         <a href="${imgSrc}" target="_blank"><img src="${imgSrc}" alt="${name} Image"></a>
//                                     </div>
//                                     <div class = "column">
//                                         <p class="pad-20">${description}</p>
//                                         <div class="columns">
//                                             <div class="column center-text">
//                                                 <a class="center-text" href="${domain}" alt="${name} URL" target="_blank">Check it out!</a>
//                                             </div>
//                                             <div class="column center-text">
//                                                 <a href="${github}" alt="${name} Repository" target="_blank">Repository</a>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>`
//         $("#projectDetails").append(projectDetails);
//     };

//     function rowChildren(text, icon, index, length) {
//         let classAdd = "indian-khaki-font"
//         let iconAdd = " indian-khaki-font"

//         switch(index) {
//             case 0:
//                 iconAdd = "matisse-font";
//                 classAdd = "matisse-font activeProject";
//             break;
//             case length - 1:
//                 classAdd = "indian-khaki-font lastItem-border";
//             break;
//         }

//         const projectListItem = `<a class="panel-block projectItem-border ${classAdd}">
//                         <span class="panel-icon">
//                             <i class="${icon} ${iconAdd}" aria-hidden="true"></i>
//                         </span>${text}</a>`;
//         $("#projectList").append(projectListItem);
//     };

//     $(".panel-block").on("click", function(event) {
//         const projectSearch = projectList.projects.filter((element) => { return element.name == event.target.innerText });
//         const _this = this;
//         $(".panel-block").removeClass("matisse-font");
//         $(".panel-block").addClass("indian-khaki-font");
//         $(".panel-block > span > i").removeClass("matisse-font");
//         $(".panel-block > span > i").addClass("indian-khaki-font");
//         $(_this).addClass("matisse-font");
//         $(_this).removeClass("indian-khaki-font");
//         $(_this).children().children().addClass("matisse-font");
//         $(_this).children().children().removeClass("indian-khaki-font");

//         populateProject(projectSearch[0]);

//     });

//     $("#bioButton").on("click", function() {
//         $('#portfolio').attr("hidden", true);
//         $('#bio').attr("hidden", function(_, attr){ return !attr});
//         $('#navbarID').removeClass("is-active");
//     });

//     $("#portfolioButton").on("click", function() {
//         $('#bio').attr("hidden", true);
//         $("#portfolio").attr("hidden", function(_, attr){ return !attr});
//         $('#navbarID').removeClass("is-active");
//     });

//   });

