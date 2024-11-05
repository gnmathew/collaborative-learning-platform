class AddBatchIdToClient < ActiveRecord::Migration[7.0]
  def change
    add_reference :clients, :batch, foreign_key: true
  end
end
