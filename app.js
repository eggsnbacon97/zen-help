	var base = {
		productFilterSetup: function() {
			$('.productFilter').each(
			function() {
				var tmp = new base.filterGroup(this);
				tmp.setup();
			});
		},
		filterGroup: function(filter_group) {
			var me = this;
			me.target_element = filter_group;
			me.active_element_index = 0;
			me.setup = function() {
				$(filter_group).find('input[type=radio]').bind('click', function() {
					me.update(this);
				});
			};
			me.update = function(target_radio) {
				var fieldsets = $(me.target_element).find('fieldset'),
					len = fieldsets.length,
					i = 0,
					j = 0,
					radios, 
					radios_len, 
					options = [],
					options_buffer = '',
					num_of_steps = 0;
	
				for (i = 1; i <= num_of_steps + 1; i += 1) {
					if ($('fieldset.step' + i).length > 0) {
						num_of_steps += 1;
					}
				}
	
				for (i = 0; i < num_of_steps; i += 1) {
					if ($(target_radio).parents('fieldset.step' + (i + 1)).length > 0) {
						for (j = i; j < num_of_steps; j += 1) {
							$('fieldset.step' + (j + 2) + ' input[type=radio]').attr('checked', false);
						}
					}
				}
	
				for (i = 0; i < len; i += 1) {
					radios = $(fieldsets[i]).find('input[type=radio]');
					radios_len = radios.length;
					for (j = 0; j < radios_len; j += 1) {
						if ($(radios[j]).is(':checked')) {
							options.push(j + 1);
						}
					}
				}
				fieldsets.addClass('hide');
				$('fieldset.option0').removeClass('hide');
				for (i = 0; i < options.length; i += 1) {
					options_buffer += options[i];
					$('fieldset.option' + options_buffer).removeClass('hide');
				}
			};
		}
	};
	
	$(
	function() {
		base.productFilterSetup();
	});    