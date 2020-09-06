class Balance < ApplicationRecord
  extend ActiveHash::Associations::ActiveRecordExtensions
  belongs_to :user
  belongs_to_active_hash :category
  validates :category, presence: true
  validates :category_id, numericality: { other_than: 1 }
  validates :detail, length: { maximum: 20 }
end
