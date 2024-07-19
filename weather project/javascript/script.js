// $(document).ready(function () {
//     // $('#hidden').on('click', function () {
//     //     $('.details-table').toggle();
//     //     $('#visible-content').toggle();
//     // });

//     $('.details').on('click', function () {
//         $('.real-details').toggle();
//     });
// });

document.getElementById('hidden').addEventListener('click', function () {
    document.getElementById('visible-content').classList.toggle('hidden-section')
    document.getElementById('table').classList.toggle('open-section')
});
document.querySelector('.details').addEventListener('click', function () {
    document.querySelector('.real-deatils').classList.toggle('open-section')
})
