import $ from 'jquery';

export const changeColors = () => {
  const colors = ["#4B2B30", "#2B4B30", "#2B304B", "#4B2B3A", "#304B2B", "#2B304B"];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];

  $("body").css("background-color", randomColor);
  $("#text, #author, #fa").css("color", randomColor);
  $("#tweet-quote, #tumblr-quote, #new-quote").css("background-color", randomColor);
};