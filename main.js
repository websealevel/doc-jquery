jQuery(document).ready(function ($) {
    // Your jQuery code here, using $ to refer to jQuery.

    console.log('Safe use of $ here !')

    $all_p = $('p')
    console.log('Le nombre de paragraphes: ', $all_p.length)
    console.log('Le premier paragraphe DOM element: ', $all_p.get(0))


    $all_p.animate(
        {
            left: "+=50",
            opacity: 0.5
        },

        // Duration
        300,

        // Callback to invoke when the animation is finished
        function () {
            console.log("animation done!");
        }
    );
});
