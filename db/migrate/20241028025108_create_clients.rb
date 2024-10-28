class CreateClients < ActiveRecord::Migration[7.0]
  def change
    create_table :clients do |t|
      t.string :username
      t.string :email
      t.string :password_digest
      t.string :id_number
      t.integer :role, default: 0
      t.integer :status, default: 0

      t.timestamps
    end
  end
end
