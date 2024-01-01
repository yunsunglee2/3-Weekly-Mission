function TimeDiff(time) {
  const today = new Date();
  const dayAgo = new Date(time);
  const dayDiff = today - dayAgo;
  const oneMin = 1000*60;
  const remainingMins = Math.floor(dayDiff / oneMin);
  
  if (remainingMins < 2){
    return `${remainingMins}min Ago`
  } else if (2 < remainingMins && remainingMins < 60){
    return `${remainingMins}mins Ago`
  } else if (60 < remainingMins && remainingMins < 60*2) {
    return `${Math.floor(remainingMins/60)}hour Ago`
  } else if (60*2 <= remainingMins && remainingMins < 60*24) {
    return `${Math.floor(remainingMins/60)}hours Ago`
  } else if (60*24 <= remainingMins && remainingMins < 60*24*2) {
    return `${Math.floor(remainingMins/60/24)}day Ago`
  } else if (60*24*2 <= remainingMins && remainingMins < 60*24*30) {
    return `${Math.floor(remainingMins/60/24)}days Ago`
  } else if (60*24*30 <= remainingMins && remainingMins < 60*24*30*2) {
    return `${Math.floor(remainingMins/60/24/30)}month Ago`
  } else if (60*24*30*2 <= remainingMins && remainingMins < 60*24*30*12) {
    return `${Math.floor(remainingMins/60/24/30)}months Ago`
  } else if (60*24*30*12 === remainingMins) {
    return `${Math.floor(remainingMins/60/24/30/12)}year Ago`
  } else if (60*24*30*12 < remainingMins) {
    return `${Math.floor(remainingMins/60/24/30/12)}years Ago`
  }
}

function TimeAgo({time}){
  return (
    <div className="timeDiff">
    {TimeDiff(time)}
    </div>
  )
}

export default TimeAgo;