(function (global, obj) {
  const model = [
    [
      '<button class="object_model w-100 btn btn-secondary" disabled>(%description%)</button>',
      '<input class="object_model w-100 form-control" type="text" value="(%text%)" placeholder="(%description%)" readonly="readonly">',
      '<textarea class="object_model form-control" type="text" placeholder="(%description%)" readonly="readonly">(%text%)</textarea>',
      '<button class="object_model w-100 btn btn-danger" control="input:range" disabled>(%description%)&nbsp; <span>1</span>&nbsp; sec</button>',
    ],
    [
      '<section class="element automation-task"><span class="badge badge-light">(%number%)</span>&nbsp;Query Selector: <code>(%query_selector%)</code>' +
        '<span class="badge close float-right">&times;</span><hr><div class="html" >' +
        "(%html_description%)" +
        "</div></section>",
    ],
  ];
  global.__automation_task = global.__automation_task || {};
  global.__automation_task.data = global.__automation_task.data || [];
  let current_object_event = [null, null, null, null];
  let isEventCreated = !1;
  const $root_element = $('.automation_task[role="app_model"]');
  const $query_selector = $root_element.find(".query_selector input");
  const $option = $root_element.find(".option");
  const $htmlElem = $root_element.find(".html_element");
  const $custom_select = $root_element.find("select.custom-select");
  const $create = $root_element.find(".create");
  const $save = $root_element.find(".save");
  const $clear = $root_element.find(".clear");
  const $sequence = $root_element.find(".sequence");
  const update_sequences = function () {
    $elements = $sequence.find("section");
    for (i = 0; i < $elements.length; i++) {
      var html = model[1][0]
        .replaceAll("(%number%)", i + 1)
        .replaceAll("(%query_selector%)", $($elements[i]).find("code").text())
        .replaceAll(
          "(%html_description%)",
          $($elements[i]).find(".html").html()
        );
      $($elements[i]).replaceWith(html);
    }
  };
  const delete_sequence = function () {
    let el = this.parentNode;
    let index = -1;
    var children = el.parentNode.childNodes;
    for (i = 0; i < children.length; i++) {
      if (children[i] == el) {
        index = i;
      }
    }
    __automation_task.data.splice(index, 1);
    el.remove();
  };
  $root_element.bind("keyup change click", function () {
    if (isEventCreated && $query_selector.val().length > 0) {
      $save.removeAttr("disabled");
    } else {
      $save.attr("disabled", true);
    }
    return false;
  });
  $sequence.bind("DOMSubtreeModified", function () {
    $($sequence)
      .find(".close")
      .unbind("click", delete_sequence)
      .bind("click", delete_sequence);
    return false;
  });
  $($sequence).click(function () {
    update_sequences();
  });
  $query_selector.keyup(function () {
    //TODO
  });
  $custom_select.change(function () {
    //TODO
    if ($custom_select.val().length > 0) {
      $create.removeAttr("disabled");
    } else {
      $create.attr("disabled", true);
    }
  });
  $create
    .click(function () {
      selected = $custom_select
        .find("option")
        .eq($custom_select.prop("selectedIndex"));
      type = selected.attr("type");
      if (type > -1) {
        $option.addClass("d-none");
        html = model[0][type];
        current_object_event[0] = selected.val();
        current_object_event[1] = selected.text();
        current_object_event[2] = html;
        html = html
          .replaceAll("(%description%)", selected.text())
          .replaceAll("(%text%)", "")
          .replaceAll('readonly="readonly"', "");
        $htmlElem.html(html);
        $htmlElem.removeClass("d-none");
        isEventCreated = !0;
      }

      try {
        const $e = $('.task .object_model[control="input:range"]');
        $e.parent(".html_element").append(
          '<input type="range" min="0" max="300" step="1" value="5" class="form-control-range mt-1" />'
        );
        $root_element.find('.task input[type="range"]').change(function () {
          current_object_event[3] = $(this).val();
          $e.find("span").html($(this).val());
        });
      } catch (e) {}
    })
    .hover(function () {
      $custom_select.change();
    });
  $save.click(function () {
    html = model[1][0];
    let object_event = current_object_event[2];
    object_event = object_event.replaceAll(
      "(%description%)",
      current_object_event[1]
    );
    if (current_object_event[3] != null) {
      object_event = object_event.replace(
        "<span>1</span>",
        current_object_event[3]
      );
    }
    html = html
      .replaceAll("(%query_selector%)", $query_selector.val())
      .replaceAll("(%html_description%)", object_event)
      .replaceAll("(%text%)", $root_element.find(".object_model").val());
    $sequence.append(html);
    update_sequences();
    string = current_object_event[3]
      ? current_object_event[3]
      : $root_element.find(".object_model").val();
    __automation_task.data.push({
      query_selector: $query_selector.val(),
      action_code: current_object_event[0],
      string: string,
    });
    $clear.click();
  });
  $clear.click(function () {
    current_object_event = [];
    isEventCreated = !0;
    $query_selector.val("");
    $custom_select.val("");
    $option.removeClass("d-none");
    $htmlElem.addClass("d-none");
    $htmlElem.html("");
    $clear.blur();
    $save.blur();
  });
})(window);
