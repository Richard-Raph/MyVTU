$(document).ready(function () {

	const  __messages = {
		staus: '', 
		message: ''
	};

	const __cabletvConfig = {
		dstv: {
			plans: [
				{name: "Dstv Sample name 1", price: 1500},
				{name: "Dstv Sample name 2", price: 6000}
			],

			// this plan will be avaliable for max number of duration
			maxDuration: 12
		},

		gotv: {
			plans: [
				{name: "GOtv Smallie Monthly", price: 900},
				{name: "GOtvsample name 12", price: 600}
			],

			// this plan will be avaliable for max number of duration
			maxDuration: 12
		},

		startimes: {
			plans: [
				{name: "Startimes Smallie Monthly", price: 900},
				{name: "Startimes name 12", price: 600}
			],

			maxDuration: 12
		}
	}
	


	/**
	 * Send Request to Backend
	 * @param  {[type]} __url      [description]
	 * @param  {String} __type     [description]
	 * @param  {Object} __data     [description]
	 * @param  {String} __dataType [description]
	 * @param  {String} __id       [description]
	 * @return {[type]}            [description]
	 */
	function __sendRequest ( __url, __type = "POST", __data = {}, __dataType = 'JSON', __id = "" ) {
		$.ajax({
			url: __url,
			type: __type,
			dataType: __dataType,
			data: __data,

			beforSend: () => {
				__messages.status = '404';
				__messages.message = "Sending Request Please Wait";
			},

			success: () => {
				__messages.status = '200';
				__messages.message = "Request Sent Waiting for reponse";
			}, 

			complete: (response) => {
				// check for internet connection error
				if ( response.status !== 404 && response.statusText !== 'error' ) {
					// process info here 
					// you can use the id to toggle different response
					


					__messages.status = '200';
					__messages.message = "message here";
				}
				else {
					if ( response.status === 404 ) {
						alert('An Error Occurred');
					}
					else {
						alert('Please Check your internet connection');
					}
				}
			}, 

			error: (err) => {
				alert('Internal Server Error ');
			}
		});
	}


	function __toggleCableTv(__cableTv = {}) {
		$("select[id=cabletv_plan]").html(`<option selected>Select a plan</option>`);

		__cableTv.plans.forEach(__element => {
			$("select[id=cabletv_plan]").append(`<option data-price="${__element.price}" value='${__element.name.split(" ").join("_")}'> ${__element.name} </option>`);
		});

		$("select[name=cabletv_plan]").change(function () {
			let __selectedPlan = $(this).val();
			$("input[name=cable_amount]").val('');
			$("select[id=cabletv_duration]").html(`<option selected>Please Select Duration</option>`);

			__cableTv.plans.forEach(__element => {
				if ( __selectedPlan.split("_").join(" ") === __element.name ) {
					// set the price 
					
					// check for changes in duration
					$("select[id=cabletv_duration]").change(function (__element) {
						let __that = $(this);
						let __val = __that.val();

						__cableTv.plans.forEach(__element => {
							if ( __selectedPlan.split("_").join(" ") === __element.name ) {
								let __newPrice = ( __val * __element.price );
								$("input[name=cable_amount]").val(__newPrice);
							}
						});
					});
				}

			});

			// get max allowed duration
			$("select[id=cabletv_duration]").html(`<option selected>Please Select Duration</option>`);
			let __maxDuration = __cableTv.maxDuration;
			for ( let i  = 1; i <= __maxDuration; i++ ) {
				$("select[id=cabletv_duration]").append(`<option value='${i}'> ${i} Months </option>`);
			}
		});

		$("label[for=cabletv_plan]").css({
			display: 'block'
		});
		$("label[for=duration]").css({
			display: 'block'
		});

	}

	$(".az_popup").hide('fast');

	// Airtime popup events
	$(".airtime_btn").click(function () {
		$(".az_popup").fadeOut('fast');
		$("#airtime_popup").fadeIn();

		return false;
	});

	// Data popup events 
	$(".data_btn").click(function () {
		$(".az_popup").fadeOut('fast');
		$("#data_popup").fadeIn();

		return false;
	});


	// Electricity popup events 
	$(".electricity_btn").click(function () {
		$(".az_popup").fadeOut('fast');
		$("#electricity_popup").fadeIn();

		return false;
	});


	// cable tv events and actions
	$(".cable_btn").click(function () {
		$(".az_popup").fadeOut('fast');
		$("#cabletv_popup").fadeIn();

		// actions 
		let __cableTv = $("select[id=cable_tv]");

		__cableTv.change(function () {
			let __that = $(this);
			let __val = __that.val();
			

			if ( __val === 'dstv' ) {
				// select dstv cabletvconfig
				__toggleCableTv(__cabletvConfig.dstv);
			}
			else if ( __val === 'gotv' ) {
				// select gotv cabletvconfig
				__toggleCableTv(__cabletvConfig.gotv);
			}
			else if( __val === 'startimes' ) {
				// select startimes cabletvconfig
				__toggleCableTv(__cabletvConfig.startimes);
			}
			else {
				alert('Invalid Cable Tv Selected');
			}

		});

		return false;
	});
	

	$(".register_popup_btn").click(function () {
		$(".az_popup").fadeOut('fast');
		$("#register_popup").css('display', 'flex');
		$("#register_popup").fadeIn();

		return false;
	});

	$(".login_popup_btn").click(function () {
		$(".az_popup").fadeOut('fast');
		// $("#login_popup").css('display', 'flex');
		$("#login_popup").fadeIn();

		return false;
	});

	$(".close_form").click(function () {
		$(".az_popup").fadeOut('fast');
	});
});