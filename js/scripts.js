$(document).ready(function() {
  $("button#hello").click(function() {
    $("ul#user").prepend("<li>Hello!</li>");
    $("ul#webpage").prepend("<li>Sup my boo bah!</li>");
    $("li").click.(function() {
      alert('hi');
    });
    // $("ul#user").children("li").first().click(function() {
    //   $(this).remove();
    // )};
    // $("ul#webpage").children("li").first().click(function() {
    //   $(this).remove();
    // )};
  });

  $("button#goodbye").click(function() {
    $("ul#user").prepend("<li>Goodbye!</li>");
    $("ul#webpage").prepend("<li>C ya Biiiiyotch!</li>");
    // $("ul#user").children("li").first().click(function() {
    //   $(this).remove();
    // )};
    // $("ul#webpage").children("li").first().click(function() {
    //   $(this).remove();
    // )};
  });

  $("button#stop").click(function() {
    $("ul#user").prepend("<li>Stop copying me!</li>");
    $("ul#webpage").prepend("<li>Girl, like I ever!</li>");
    // $("ul#user").children("li").first().click(function() {
    //   $(this).remove();
    // )};
    // $("ul#webpage").children("li").first().click(function() {
    //   $(this).remove();
    // )};
  });
});
