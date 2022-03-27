$(document).ready(function(){
	//$('[data-toggle="tooltip"]').tooltip();
	// Append table with add row form on add new button click
    $(".add-new").click(function(){
		//$(this).attr("disabled", "disabled");
		var index = $("table tbody tr:last-child").index();
		var dropdown=$("table td:nth-child(2)").html();
		var row = '<tr>' +
            '<td><input type="date" class="form-control" name="date" id="date"></td>' +
            '<td>'+dropdown+'</td>' +
            '<td><input type="text" class="form-control qty" name="qty" id="qty" onblur="add_to_total(this)"></td>' +
            '<td><input type="text" class="form-control rate" name="rate" id="rate" onblur="add_to_total(this)"></td>' +
            '<td><input type="text" class="form-control total_price" name="amount" id="amount"></td>' +
			'<td><a class="delete" title="Delete" data-toggle="tooltip"><i class="material-icons">&#xE872;</i></a></td>' +
        '</tr>';
    	$("table").append(row);	
		$("table tbody tr").eq(index + 1).find(".add, .edit").toggle();
       // $('[data-toggle="tooltip"]').tooltip();
    });
	/*// Add row on add button click
	$(document).on("click", ".add", function(){
		var empty = false;
		var input = $(this).parents("tr").find('input[type="text"]');
        input.each(function(){
			if(!$(this).val()){
				$(this).addClass("error");
				empty = true;
			} else{
                $(this).removeClass("error");
            }
		});
		$(this).parents("tr").find(".error").first().focus();
		if(!empty){
			input.each(function(){
				$(this).parent("td").html($(this).val());
			});			
			$(this).parents("tr").find(".add, .edit").toggle();
			$(".add-new").removeAttr("disabled");
		}		
    });
	// Edit row on edit button click
	$(document).on("click", ".edit", function(){		
        $(this).parents("tr").find("td:not(:last-child)").each(function(){
			$(this).html('<input type="text" class="form-control" value="' + $(this).text() + '">');
		});		
		$(this).parents("tr").find(".add, .edit").toggle();
		$(".add-new").attr("disabled", "disabled");
    });*/
	// Delete row on delete button click
	$(document).on("click", ".delete", function(){
        $(this).parents("tr").remove();
		//$(".add-new").removeAttr("disabled");
    });
});
