	<div class="box-container">
		<?php if(isset($error)): ?>
			<p class="box-container-txt" style="color:red">Error: <?php echo $error;?></p>
		<?php endif; ?>
		<p class="box-container-txt">Enter your email address and password to log in. If you don't have an account, you can create one immediately.</p>
		<input type="email" placeholder="Email" id="email" name="email">
		<input type="password" placeholder="Parola" id="pass" name="pass">

		<div style="display:block">
			<input type="Checkbox" id="rememberme" name="rememberme" style="vertical-align: middle;"><label for="rememberme" style="font-size: 14px; color: #777;">Stay logged in</label>
			<button id="btn-enter" style="margin: 10px 20px;">Enter</button>
			<button id="btn-register" style="margin: 10px 20px;border: 1px solid #0f7dcc; background-color: white; color: #0f7dcc; font-size:13px;">Create Account</button>
		</div>
	</div>

	<div class="box-container">
		<p class="box-container-txt">You can enter without an account. Files will be deleted in 30 minutes unless you login. <a id="btn-no-acc" style="cursor: pointer;">Enter without account</a></p>
	</div>