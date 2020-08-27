# テーブル設計

## users テーブル

| Column     | Type   | Options     |
| --------   | ------ | ----------- |
| nickname   | string | null: false |
| email      | string | null: false |
| password   | string | null: false |

### Association

- has_many :balances

## balances テーブル

| Column       | Type   | Options     |
| ------       | ------ | ----------- |
| detail       | string |             |
| money_amount | integer | null: false |
| category-id  | integer | null: false |
| user         | references | null: false, foreign_key: true |

### Association

- belongs_to :user
- belongs_to_active_hash :category


# active_hash
--------------------
## categories



