class Games < ActiveRecord::Migration[5.0]
  def change
    create_table :games do |t|
      t.string :location, null: false, default: ""
      t.string :time, null: false, default: ""
      t.string :date, null: false, default: ""
      t.string :format, null: false, default: ""
      t.string :number_of_players, null: false, default: ""

      t.timestamps
    end
  end
end
