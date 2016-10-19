export const fetchAllPins = (loc, success, error) => {
  $.ajax({
    method: 'GET',
    url: `https://api.foursquare.com/v2/venues/explore?ll=${loc.lat},${loc.lng}&client_id=KB45V00TQB1PCVWOWRWQP3VPYAAB15BEG5VCZVGA3LADGA4B&client_secret=J3R4VAADPG4N4IATDCA2NVOU1Q0FQ5LQ0ZS3TBNTFM2DVKFT&v=YYYYMMDD`,
    success,
    error
  });
};

export const fetchOnePin = (venue, success, error) => {
  $.ajax({
    method: 'GET',
    url: `https://api.foursquare.com/v2/venues/${venue}`,
    success,
    error
  });
};
