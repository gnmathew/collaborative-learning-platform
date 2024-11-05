class CreateBatches < ActiveRecord::Migration[7.0]
  def change
    create_table :batches do |t|
      t.string :name
      t.integer :status, default: 0

      t.timestamps
    end
  end
end
