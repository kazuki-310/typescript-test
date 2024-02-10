import { ShoppingList } from './practice';

describe('ShoppingList', () => {
  let shoppingList: ShoppingList;

  beforeEach(() => {
    shoppingList = new ShoppingList();
  });

  describe('addItem', () => {
    it('アイテムをリストに追加する', () => {
      shoppingList.addItem('apple');
      expect(shoppingList.list).toEqual(['apple']);
    });
  });

  describe('removeItem', () => {
    it('アイテムをリストに削除する', () => {
      shoppingList.addItem('apple');
      shoppingList.removeItem('apple');
      expect(shoppingList.list).not.toContain(['apple']);
    });

    it('リストにアイテムが存在しない場合', () => {
      expect(() => shoppingList.removeItem('banana')).toThrow('アイテム: banana は存在しません');
    });
  });
});
