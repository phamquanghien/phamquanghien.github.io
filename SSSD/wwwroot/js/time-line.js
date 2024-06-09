const currentDate = new Date();
const formattedCurrentDate = ("0" + currentDate.getDate()).slice(-2) + '/' + ("0" + (currentDate.getMonth() + 1)).slice(-2) + '/' + currentDate.getFullYear();

// Chọn phần tử HTML mà bạn muốn thay đổi giá trị ngày của
const firstTimelineStep = document.querySelector('.timeline-step:first-child .h6');

// Cập nhật giá trị của phần tử HTML đó với ngày hiện tại đã lấy được
firstTimelineStep.textContent = formattedCurrentDate;

document.addEventListener('DOMContentLoaded', function () {
    var timeline = new HorizontalTimeline('.timeline', {
      itemClass: 'timeline-item',
      labelClass: 'timeline-time',
      eventClass: 'timeline-event'
    });
  });