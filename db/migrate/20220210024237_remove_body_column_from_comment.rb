class RemoveBodyColumnFromComment < ActiveRecord::Migration[6.1]
  def change
    remove_column :comments, :body
  end
end
