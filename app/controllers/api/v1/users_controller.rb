class Api::V1::UsersController < ApplicationController

  def index
    @current_user = current_user
    render json: @current_user
  end

  def create
    @user = User.create(user_params)
    if @user.save!
      render json: @user
    end
  end

  def destroy
    @user = User.find(params[:id])
    @user.destroy
    flash[:notice] = "Successfully deleted user!"
    redirect_to users_path
  end
end
