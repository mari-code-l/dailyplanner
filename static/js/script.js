$(document).ready(function () {
    $(".sidenav").sidenav({
        edge: "right"
    });
    $(".collapsible").collapsible();
    $(".tooltipped").tooltip();
    $("select").formSelect();
    $(".datepicker").datepicker({
        format: "dd mmmm, yyyy",
        yearRange: 3,
        minDate: new Date(),
        showClearBtn: true,
        i18n: {
            done: "Select"
        }
    });
});

