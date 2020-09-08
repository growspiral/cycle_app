# アプリケーション名

- cycle_app

# アプリケーション概要

- 家計簿のアプリケーションです。ユーザーの管理機能があり、個々のユーザーが自身の家計簿を作成することができます。編集機能でその日のお金の出入りを追加することで、日毎、月毎の合計金額を見ることができます。

# URL

https://cycle-app-28433.herokuapp.com/

# テスト用アカウント

email: a@com
password: 111aaa

## BASIC認証

ユーザー名: magatsuhi
password: m3sqsknm

# 利用方法

初めに新規登録ボタンよりご自身のアカウントを作成してください。新規登録に成功しますとマイページに遷移しますので家計簿に追加したい日にちをクリックしてください。編集画面で収支、費目、金額などを入力すると項目を追加できます。削除ボタンを押すと項目を削除できます。マイページに戻ると日毎、月毎の合計金額が反映されます。

# 目指した課題解決

従来の家計簿アプリはお金を貯めることに重きを置いている印象があルのですが、年々お金の価値が下がってきているというのに貯めることにフォーカスするのは利に反するなと感じていました。そこで当アプリケーションではお金を循環させることに重きを置き、お金を使えば使うほど相手方が豊かになり、やがて周り回って自身に返ってくることが実感できるような家計簿を目指しました。

# 洗い出した要件

| 機能             | 目的                                    | 詳細            | ストーリー(ユーストーリー) | 見積もり(所要時間) | 
| ---------        |
| デプロイ         | アプリをインターネット上に公開するため |
| BASIC認証        | パスワードを知る人にのみ利用させるため |
| ユーザー管理機能 | ログインしているかどうかを判断するため |
| マイページ       | ユーザー個別の家計簿を表示させるため   |
| 家計簿編集機能   | 項目を追加、確認するため               |
| 家計簿削除機能   | 不要な項目を削除するため               |
| フロント実装     | アプリの見た目を整えるため             |
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
| Column        | Type      | Options     |
| --------      | ------    | ----------- |
| detail        | string    |              |
| money_amount  | integer   | null: false |
| category_id   | integer   | null: false |
| user          | references   | null: false, foreign_key: true |


### Association

- belongs_to :user
- belongs_to_active_hash :category


# active_hash
--------------------
## categories



      