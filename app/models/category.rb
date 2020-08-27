class Category < ActiveHash::Base
  self.data = [
    { id: 1, name: '--' },
    { id: 2, name: '食費' },
    { id: 3, name: '日常費' },
    { id: 4, name: '娯楽費' },
    { id: 5, name: '自己投資' },
    { id: 6, name: '交通費' },
    { id: 7, name: '固定費' },
    { id: 8, name: '収入' }

  ]
end
