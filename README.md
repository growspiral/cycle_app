# アプリケーション名

- cycle_app

# アプリケーション概要

- 家計簿のアプリケーションです。ユーザーの管理機能があり、個々のユーザーが自身の家計簿を作成することができます。編集機能でその日のお金の出入りを追加することで、日毎、月毎の合計金額を見ることができます。



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



      