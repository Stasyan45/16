$(document).ready(function () {
    // 1. Додати новий HTML до <div id="addHtmlt">
    $("#addHtmlt").html("<h1>New Element</h1>");
  
    // 2. Вибір елемента за класом та приховування його
    $(".hideMe").hide();
  
    // 3. Вибір елемента за тегом <section> та видалення його
    $("section").remove();
  
    // 4. Вибір <div>, додавання класу та вставка тексту
    $(".addClassContainer").addClass("addClass").text("Lumos Maxima");
  });
  