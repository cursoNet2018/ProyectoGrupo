function popup(employyeid) {

    $.ajax({
        type: 'get',
        url: 'http://localhost:51521/employees/Edit/',
        data: {
            'id': employyeid
        },
        success: function (response) {
           // $("#contenedor").html(response);
            $("#show-modal").modal({ show: true,  keyboard: false })
            $("#inner-show-modal").html(response);

        },
        error: function () {
            alert("error");
        }
    });

   // $("#contenedor").html("<span style='color:green'>Texto de Victor</span>");

};
