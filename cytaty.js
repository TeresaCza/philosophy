var quotes = ['"Jeśli ktoś pyta – po co jest filozofia, to jedyną ostateczną odpowiedzią jest: aby usiłować ostatecznie rozumieć rzeczywistość".<br><br>M. A. Krąpiec, <span style="font-style:italic;">O rozumienie filozofii</span>',
              '"Pierwszym i zasadniczym momentem dla każdej nauki, czy to szczegółowej, czy też ogólnej, jaką jest filozofia, jest utworzenie przedmiotu zorganizowanych dociekań".<br><br>S. Kamiński, M. A. Krąpiec, <span style="font-style:italic;">Specyficzność poznania metafizycznego</span>',
              '"Sądy egzystencjalne, czyli poznawcza afirmacja istnienia, są [...] poznaniem bezpośrednim rzeczy działającej na nas ze względu na swe istnienie".<br><br>M. A. Krąpiec, <span style="font-style:italic;">Byt i istota</span>',
              '"Być bytem jako byt znaczy być jakąkolwiek konkretną w sobie zdeterminowaną treścią (istotą konkretną) jako istniejącą ”.<br><br>M. A. Krąpiec, <span style="font-style:italic;">Metafizyka</span>',
              '"Pojęcia transcendentalne w swej strukturze formalnej stanowią „wizję” całej rzeczywistości, a więc one umożliwiają poznawczy kontakt z tym wszystkim, co mieści się w całym i każdym bycie – intelektualną i filozoficzną „wizję” konkretu".<br><br>M. A. Krąpiec, <span style="font-style:italic;">Z teorii i metodologii metafizyki</span>',
              '"Całokształt rozważań filozoficznych i filozoficznej interpretacji świata jawi się jako coraz to bardziej uwyraźniające się pojęcie bytu jako bytu. I tym właśnie „pojęciem” wszystkie zagadnienia są powiązane, dzięki czemu metafizyczną interpretację świata można nazwać „systemem”".<br><br>M. A. Krąpiec, <span style="font-style:italic;">Z teorii i metodologii metafizyki</span>'];

var num = 0;

'use strict';

function next() {
  var quo = document.getElementById("quote");
  num++;
  if (num >= quotes.length) {
    num = 0;
  }

  quo.innerHTML = quotes[num];
}

function prev() {
  var quo = document.getElementById("quote");
  num--;
  if (num < 0) {
    num = quotes.length - 1;
  }

  quo.innerHTML = quotes[num];
}
