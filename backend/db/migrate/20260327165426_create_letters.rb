class CreateLetters < ActiveRecord::Migration[8.1]
  def change
    create_table :letters do |t|
      t.text :content
      t.string :sender
      t.string :recipient
      t.datetime :deliver_at
      t.datetime :readable_at
      t.boolean :delivered
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
