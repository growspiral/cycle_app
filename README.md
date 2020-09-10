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

| 機能             | 目的                                   | 詳細                                                   |  
| ---------        | -------------------------------------- | ----------------------------------------------------   |
| デプロイ         | アプリをインターネット上に公開するため | herokuを用いた                                         | 
| BASIC認証        | パスワードを知る人にのみ利用させるため | 環境変数を用いた                                       | 
| ユーザー管理機能 | ログインしているかどうかを判断するため | 新規登録画面、ログイン画面の作成。データベースに保存。 | 
| マイページ       | ユーザー個別の家計簿を表示させるため   | カレンダーを表示させ、日毎、月毎の合計金額を表示。     | 
| 家計簿編集機能   | 項目を追加、確認するため               | 非同期で項目を追加、合計金額の表示。バリデーション。   |
| 家計簿削除機能   | 不要な項目を削除するため               | 日付毎、それぞれの項目に対して削除ができる。           |
| フロント実装     | アプリの見た目を整えるため             | 項目を横並びにする。文字の大きさ、配置を考える。       |


| 機能             | ストーリー(ユーストーリー)                                           | 見積もり | 
| ---------        | -------------------------------------------------------------------- | -------- |
| デプロイ         | インターネット上で利用できる。                                       | 1時間    |            
| BASIC認証        | ユーザー名、パスワードを入力する。                                   | 1時間    |
| ユーザー管理機能 | 新規登録画面で必要事項を入力。ログインができる。                     | 5時間    |
| マイページ       | 日付をクリックすると編集画面に遷移。日、月毎の合計が見れる。         | 3日      |
| 家計簿編集機能   | その日の項目を追加。複数の項目を追加でき合計金額を見ることができる。 | 5日      |
| 家計簿削除機能   | 間違ったり不要になった項目を削除できる                               | 2日      |
| フロント実装     | 使いやすいレイアウト                                                 | 1日      

![demo](https://Sep-10-2020 14-22-43.gif)

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



      