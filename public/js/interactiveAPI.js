(function() {
  var mainSection, showAllDivs;

  if ($("html").hasClass("no-touch") && $(window).width() >= 1024) {
    mainSection = $("#demo-container");
    showAllDivs = function() {
      mainSection.find('*').removeClass("faded focused-example focused-parent edit-view");
    };
    $(".view-example").click(function() {
      var $this, columnParent, dataAttribute, demoDiv, exampleParent, mainChildren, showExample;
      $this = $(this)[0];
      dataAttribute = $this.getAttribute("data-example");
      demoDiv = $("." + dataAttribute);
      exampleParent = demoDiv.parents(":eq(1)");
      columnParent = demoDiv.parents(":eq(2)");
      mainChildren = mainSection.children().not(exampleParent).not(columnParent);
      showExample = function() {
        if (dataAttribute === "edit-example") {
          exampleParent.addClass("edit-view");
        }
        mainChildren.addClass("faded");
        exampleParent.addClass("focused-parent");
        demoDiv.addClass("focused-example");
      };
      showAllDivs();
      showExample();
    });
    $(".close-api").click(function() {
      return showAllDivs();
    });
  }

}).call(this);
