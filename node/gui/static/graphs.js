function request_graphing_data(buffer) {
    $.ajax({
        url: buffer
    }).success(function(data) {
        $.plot($('#my_graph'), [data['data']]);
    });

}

function plot_graphs() {
    request_graphing_data('data');
}

var interval = setInterval(plot_graphs, 1000);
