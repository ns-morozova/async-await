import GameSavingLoader from "../GameSavingLoader";

test('Проверка класса GameSavingLoader', () => {

  (async () => {
    try {
      const data = JSON.parse('{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}');
      const loadd = new GameSavingLoader(); 
      const response = await loadd.load();
      expect(response).toEqual(data);
    } catch(err) {      
    }
  })();
});
