function launchConfetti(canvasId) {
    var myConfetti = confetti.create(document.querySelector("#" + canvasId), {
        resize: false,
        useWorker: false,
    });
    myConfetti({
        particleCount: 200,
        spread: 100,
        origin: { y: 0.8 },
        startVelocity: 20,
        ticks: 100,
    });
}

// $(document).ready(function () {
//     $(document).keydown(function () {

//         $(".keys").each(function () {

//             if (
//                 $(this).find(".hoverClass").length ===
//                 $(this).find("span").length + 1
//             ) {
//                 let ID = $(this).parent().attr("data-canvas-id");
//                 launchConfetti(ID);
//                 console.log(ID);
//             }

//         });
//     });
// });
