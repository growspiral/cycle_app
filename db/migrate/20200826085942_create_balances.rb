class CreateBalances < ActiveRecord::Migration[6.0]
  def change
    create_table :balances do |t|
      t.string :detail
      t.integer :money_amount, null: false
      t.date :start_time, null: false
      t.integer :category_id, null: false
      t.string :balance, null:false
      t.references :user, null: false, foreign_key: true
      t.timestamps
    end
  end
end


