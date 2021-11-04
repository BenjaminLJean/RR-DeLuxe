class CreateAvatars < ActiveRecord::Migration[6.1]
  def change
    create_table :avatars do |t|
      t.string :name
      t.string :rank
      t.string :status
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
