var express = require('express');
var router = express.Router();

// MovieApp APIのURL
const MOVIEAPP_API = 'ここに仮想ネットワーク内の MovieApp-XYZ API の URL を入力してください';
let errMessage = 'None';

/* GET home page. */
router.get('/', function (req, res, next) {

  // MovieApp APIを呼び出す
  const movieList = callAPI(MOVIEAPP_API).then((result) => {
    res.render('index', { title: 'Movie List', movieList: result, errMessage: errMessage });
    return result;
  });
});

//REST API のエンドポイント MOVIEAPP_API に GET リクエストを送信する
async function callAPI(url) {
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json();
  } catch (error) {
    errMessage = error.message;
    return [];
  }
}

module.exports = router;
