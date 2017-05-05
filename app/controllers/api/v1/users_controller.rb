class Api::V1::UsersController < ApplicationController

  def index
    @users = User.all
    @admins = User.where(admin: true)
    @current_user = current_user
    respond_to do |format|
      format.json  { render :json => {:admins => @admins, :current_user => @current_user }}
    end
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
